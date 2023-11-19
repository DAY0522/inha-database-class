-- Building
INSERT INTO `INHA`.`Building` (`Name`) VALUES
('1호관'), ('2호관'), ('3호관'), ('4호관'), ('5호관');

-- Department
INSERT INTO `INHA`.`Department` (`Name`, `Email`, `Phone number`, `Building_id`) VALUES
('정보통신공학과', 'dept1@email.com', '010-1111-1111', 1),
('컴퓨터공학과', 'dept2@email.com', '010-2222-2222', 2),
('기계공학과', 'dept3@email.com', '010-3333-3333', 3),
('전기공학과', 'dept4@email.com', '010-4444-4444', 4),
('전자공학과', 'dept5@email.com', '010-5555-5555', 5);

-- Room
INSERT INTO `INHA`.`Room` (`Name`, `Capacity`, `Building_id`) VALUES
('101', '50', 1), ('102', '20', 1), ('101', '60', 2), ('101', '70', 3), ('101', '80', 4), ('101', '90', 5), ('201', '90', 5);

-- Student
INSERT INTO `INHA`.`Student` (`Name`, `Email`, `Phone number`, `Major`) VALUES
('Student1', 'student1@email.com', '010-1111-1112', '정보통신공학과'),
('Student2', 'student2@email.com', '010-2222-2223', '컴퓨터공학과'),
('Student3', 'student3@email.com', '010-3333-3334', '기계공학과'),
('Student4', 'student4@email.com', '010-4444-4445', '전기공학과'),
('Student5', 'student5@email.com', '010-5555-5556', '전자공학과');