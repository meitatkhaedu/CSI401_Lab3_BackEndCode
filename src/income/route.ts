import express, { Request, Response } from "express";

export const income = express();

interface responseObject {
  code: string;
  status: string;
  data: object;
}

income.post("/getInfo", (req: Request, res: Response) => {
  const body = req.body;
  return res.status(200).json({
    code: "Success-01-0001",
    status: "Sucess",
    data: {
      empId: body.empId,
      empName: "เมธัส คำจาด",
      empSalary: 400000,
      empLeave: 5,
      empLate: 1,
    },
  });
});
