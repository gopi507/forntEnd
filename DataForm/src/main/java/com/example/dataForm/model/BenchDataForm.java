package com.example.dataForm.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection  ="benchData")
public class BenchDataForm {
	
	@Transient
	public static final String SEQUENCE_NAME = "emp_sequence";
	
	@Id
	public long empId;
	public String name;
	public String businessEmail;
	public String baseLocation;
	public String reportingToBase;
	public String explanation;
	public String certifications;
	public String benchStatus;
	public  String attendingBenchCalls;
	 public  String currentWorkDetails;
	 public String trainingOrActivity;
	 public String otherActivity;
	 public  String completionDate;
	 public String interviewPreparedness;
	 public String isUpdatingDigiDashboard;
	
	
	

}
