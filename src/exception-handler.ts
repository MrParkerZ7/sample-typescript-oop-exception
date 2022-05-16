import { TestException } from "./exception";

export const reThrowExceptionHandler = (err: any, ctx: any): void => {
  console.error("CommonException", err, ctx);
  throw new TestException("Exception_Throw_verify");
};

export const commonExceptionHandler = (err: any, ctx: any): void =>
  console.error("BusinessException", err, ctx);

export const businessExceptionHandler = (err: any, ctx: any): void =>
  console.error("BusinessException", err, ctx);
