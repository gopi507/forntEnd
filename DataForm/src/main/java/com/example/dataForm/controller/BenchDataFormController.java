package com.example.dataForm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dataForm.model.BenchDataForm;
import com.example.dataForm.service.BenchDataFormService;
import com.example.dataForm.service.SequenceGeneratorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BenchDataFormController {
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
	BenchDataFormService benchDataFormService;
	@GetMapping("/getAll")
	public List<BenchDataForm> getAll(){
		return benchDataFormService.getAll();
				}
	@PostMapping("/addBenchDataForm")
	public BenchDataForm addBenchDataForm(@RequestBody BenchDataForm benchDataForm) {
		benchDataForm.setEmpId(sequenceGeneratorService.generateSequence(BenchDataForm.SEQUENCE_NAME));
		return benchDataFormService.addBenchDataForm(benchDataForm);
	}
	@PutMapping("/updateBenchDataForm")
	public BenchDataForm updateBenchDataForm(@RequestBody BenchDataForm benchDataForm) {
		return benchDataFormService.updateBenchDataForm(benchDataForm);
	}

}
