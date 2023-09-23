package com.example.dataForm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dataForm.model.BenchDataForm;
import com.example.dataForm.repository.BenchDataFormRepository;

@Service
public class BenchDataFormService {
	
	
	@Autowired
	BenchDataFormRepository benchDataFormRepository;
	
	
	public List<BenchDataForm> getAll(){
		
	
		return benchDataFormRepository.findAll();	
		}


   public BenchDataForm getByEmpId(long id) {
	   return benchDataFormRepository.findByEmpId(id);
   }
   public BenchDataForm getByName(String name) {
	   return benchDataFormRepository.findByName(name);
   }
   public BenchDataForm getByBusinessEmail(String email) {
	   return benchDataFormRepository.findByBusinessEmail(email);
   }
   public BenchDataForm getByBaseLocation(String baseLocation) {
	   return benchDataFormRepository.findByBaseLocation(baseLocation);
   }
	 public BenchDataForm addBenchDataForm(BenchDataForm benchDataForm) {
		 return benchDataFormRepository.save(benchDataForm);
	 }
	 public BenchDataForm updateBenchDataForm(BenchDataForm benchDataForm) {
		 BenchDataForm benchDataForm2=benchDataFormRepository.findByEmpId(benchDataForm.getEmpId());
		 benchDataForm2.setName(benchDataForm.getName());
		 benchDataForm2.setBusinessEmail(benchDataForm.getBusinessEmail());
		 benchDataForm2.setBaseLocation(benchDataForm.getBaseLocation());
		 benchDataForm2.setReportingToBase(benchDataForm.getReportingToBase());
		 benchDataForm2.setExplanation(benchDataForm.getExplanation());
		 benchDataForm2.setCertifications(benchDataForm.getCertifications());
		 benchDataForm2.setBenchStatus(benchDataForm.getBenchStatus());
		 return benchDataFormRepository.save(benchDataForm2);
	 }
	 public String deleteBenchDataForm(long id) {
		 BenchDataForm benchDataForm=benchDataFormRepository.findByEmpId(id);
		 benchDataFormRepository.delete(benchDataForm);
		 return "deleted";
	 }
   }
