package com.example.dataForm.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.dataForm.model.BenchDataForm;
@Repository
public interface BenchDataFormRepository extends MongoRepository<BenchDataForm, String> {
  
	
	public List<BenchDataForm> findAll();
	public BenchDataForm findByEmpId(long id);
	public BenchDataForm findByName(String name);
	public BenchDataForm findByBusinessEmail(String email);
	public BenchDataForm findByBaseLocation(String baseLocation);
	}
