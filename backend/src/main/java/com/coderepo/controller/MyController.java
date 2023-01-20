package com.coderepo.controller;

import com.coderepo.models.Record;
import com.coderepo.repo.RecordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/record")
public class MyController {

    @Autowired
    private RecordsRepository recordsRepository;

    @PostMapping("/")
    public ResponseEntity<?> addRecord (@RequestBody Record record) {
        Record save = this.recordsRepository.save(record);
        return ResponseEntity.ok(save);
    }

    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<?> getRecords() {
        return ResponseEntity.ok(this.recordsRepository.findAll());
    }

}
