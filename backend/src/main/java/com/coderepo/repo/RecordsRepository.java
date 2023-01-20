package com.coderepo.repo;

import com.coderepo.models.Record;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecordsRepository extends MongoRepository<Record,String> {

}
