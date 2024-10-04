//Teacher Type
type teacher = {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

//Student Type
type student = {
  studentId: number;
  name: string;
  email: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
};

//Parent Type
type parent = {
  id: number;
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
};

//Subject Type
type subject = {
  id: number;
  name: string;
  teachers: string[];
};

//Class type
type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

//Lesson type
type lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

//Exam type
type exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

//Assignemnt type
type assignemnt = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

//Result type
type result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

//Event type
type event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

//Announcement type
type announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};
