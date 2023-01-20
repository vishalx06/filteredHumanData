package com.coderepo.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "records")
public class Record {

    public String timeStamp;
    public String _id;
    public List<Instance> instances;


}