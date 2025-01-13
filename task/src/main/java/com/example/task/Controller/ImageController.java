package com.example.task.Controller;

import com.example.task.Entity.Image;
import com.example.task.Repository.ImageRepository;
import com.example.task.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    private final ImageService imageService;

    // Constructor injection of ImageService
    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }
    @Autowired
    private ImageRepository imageRepository;

    // Endpoint to add an image
    @PostMapping("/")
    public ResponseEntity<String> addImage(
            @RequestParam("name") String name,
            @RequestParam("imageData") MultipartFile imageData,  // Handle file input correctly
            @RequestParam("displayOrder") int displayOrder) {

        try {
            // Convert the image data (MultipartFile) to byte array
            byte[] imageBytes = imageData.getBytes(); // Convert MultipartFile to byte array

            // Create a new Image entity and set properties
            Image image = new Image();
            image.setName(name);
            image.setImageData(imageBytes);  // Store image as byte array
            image.setDisplayOrder(displayOrder);

            // Save the image entity to the database
            imageRepository.save(image);

            return ResponseEntity.ok("Image uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading image");
        }
    }

    // Endpoint to fetch all images
    @GetMapping("/1")
    public List<Image> getAllImages() {
        return imageService.getAllImages(); // Use service to fetch all images
    }

    // Endpoint to fetch an image by ID
    @GetMapping("/{id}")
    public ResponseEntity<Image> getImage(@PathVariable Long id) {
        Optional<Image> image = imageService.getImageById(id);
        return image.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint to update an image's display order
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateDisplayOrder(@PathVariable Long id, @RequestParam int newOrder) {
        imageService.updateDisplayOrder(id, newOrder);
        return ResponseEntity.noContent().build();
    }

    // Endpoint to delete an image by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteImage(@PathVariable Long id) {
        imageService.deleteImage(id);
        return ResponseEntity.noContent().build();
    }
}
