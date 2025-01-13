package com.example.task.Repository;



import com.example.task.Entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByOrderByDisplayOrder();
    List<Image> findByIdIn(List<Long> ids);
}
