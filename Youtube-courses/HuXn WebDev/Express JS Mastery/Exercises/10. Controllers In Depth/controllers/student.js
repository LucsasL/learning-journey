import express from "express";

export default class Controllers {
  constructor () {
    this.allStudents = (req, res) => res.send("All students");
    this.newStudent = (req, res) => res.send("Create User");
    this.updateStudents = (req, res) => res.send("Update Users");
    this.deleteStudents = (req, res) => res.send("Delete Users");
  }
}