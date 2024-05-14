import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Course } from "./course.entity";
import { Students } from "./student.entity";
import { Teachers } from "./teacher.entity";

@Entity()
export class Student_course_info{
    @PrimaryColumn()
    course_info_id: number;
    @Column({name:'stud_id'})
    stud_id: number;
    @Column({name:'course_id'})
    course_id: number;
    @Column({name:"teacher_id"})
    teacher_id: number; 

    @ManyToOne(() => Course, (course) => course.student_course_info)
    @JoinColumn({
        name: 'course_id'
    })
    course: Course
    @ManyToOne(() => Students, (students) => students.stdcourseinfo)
    @JoinColumn({
        name: 'stud_id'
    })
    students: Students
    @ManyToOne(() => Teachers, (teachers) => teachers.studentinfo)
    @JoinColumn({
        name: 'teacher_id'
    })
    teachers: Teachers

}