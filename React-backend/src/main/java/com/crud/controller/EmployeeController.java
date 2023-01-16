package com.crud.controller;

import com.crud.exception.UserNotFoundException;
import com.crud.model.Employee;
import com.crud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("/employee")
    public Employee createEmployee(@RequestBody  Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployee(@PathVariable long id){
        Employee employee = null;
        Optional<Employee> optional = employeeRepository.findById(id);
        if(optional.isPresent()){
            employee = optional.get();
        }
        return employee;
    }

    /*@PutMapping("/employee/{id}")
    public Employee editEmployee(@PathVariable long id,@RequestBody Employee employee){
        Employee existingEmployee = null;
        Optional<Employee> optional = employeeRepository.findById(id);
            existingEmployee = optional.get();
            existingEmployee.setFirstName(employee.getFirstName());
            existingEmployee.setLastName(employee.getLastName());
            existingEmployee.setEmailId(employee.getEmailId());
            employeeRepository.save(existingEmployee);
        return employee;
    }*/

    @PutMapping("/employee/{id}")
    Employee updateUser(@RequestBody Employee newEmployee, @PathVariable Long id) {
        return employeeRepository.findById(id)
                .map(employee -> {
                    employee.setFirstName(newEmployee.getFirstName());
                    employee.setLastName(newEmployee.getLastName());
                    employee.setEmailId(newEmployee.getEmailId());
                    return employeeRepository.save(employee);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/employee/{id}")
    public void deleteEmployee(@PathVariable long id){
         employeeRepository.deleteById(id);
    }
}