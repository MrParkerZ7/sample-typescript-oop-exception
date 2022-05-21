import Catch from "catch-decorator";
import { CommonException, BusinessException } from "./exception";
import {
  commonExceptionHandler,
  businessExceptionHandler,
  reThrowExceptionHandler,
} from "./exception-handler";
export const sampleFunction = (msg: string) => `SampleFunction Print :: ${msg}`;

export class SampleThrowing {
  @Catch(CommonException, commonExceptionHandler)
  throwUncatchException() {
    throw "Mock_Unknow";
  }
  @Catch(CommonException, reThrowExceptionHandler)
  reThrowCommonException() {
    throw new CommonException("Mock_To_Rethrow");
  }
  @Catch(CommonException, commonExceptionHandler)
  throwNonCommonException() {
    throw new BusinessException("Mock_BusinessException");
  }

  @Catch(BusinessException, commonExceptionHandler)
  throwNonBusinessException() {
    throw new CommonException("Mock_CommonException");
  }

  @Catch(CommonException, commonExceptionHandler)
  catchCommonException() {
    throw new CommonException("Mock_CommonException");
  }

  @Catch(BusinessException, businessExceptionHandler)
  catchBusinessException() {
    throw new BusinessException("Mock_BusinessException");
  }
}
