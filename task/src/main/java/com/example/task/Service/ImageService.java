package com.example.task.Service;

import com.example.task.Entity.Image;
import com.example.task.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    // Method to add an image with byte[] (from MultipartFile)
    public Image addImage(String name, MultipartFile imageData, int displayOrder) throws IOException {
        Image image = new Image();
        image.setName(name);
        image.setImageData(imageData.getBytes());  // Convert MultipartFile to byte[]
        image.setDisplayOrder(displayOrder);
        return imageRepository.save(image);  // Save image to DB
    }

    // Fetch all images ordered by displayOrder
    public List<Image> getAllImages() {
        return imageRepository.findAllByOrderByDisplayOrder();
    }

    // Fetch a single image by its ID
    public Optional<Image> getImageById(Long id) {
        return imageRepository.findById(id);
    }

    // Update the display order of an image
    public void updateDisplayOrder(Long id, int newOrder) {
        Optional<Image> image = imageRepository.findById(id);
        image.ifPresent(i -> {
            i.setDisplayOrder(newOrder);
            imageRepository.save(i);  // Save after updating
        });
    }

   
    public void deleteImage(Long id) {
        imageRepository.deleteById(id);  
    }
}
