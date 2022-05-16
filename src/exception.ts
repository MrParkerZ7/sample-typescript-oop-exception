export class Exception extends Error {
  cause?: Error | undefined;
  constructor(message: string, cause: Error | undefined = undefined) {
    super(message);
    this.name = this.constructor.name;
    this.cause = cause;
  }
}

export class CommonException extends Exception {
  constructor(message: string, cause: Error | undefined = undefined) {
    super(message, cause);
  }
}

export class BusinessException extends Exception {
  constructor(message: string, cause: Error | undefined = undefined) {
    super(message, cause);
  }
}
export class TestException extends Exception {
  constructor(message: string, cause: Error | undefined = undefined) {
    super(message, cause);
  }
}
