type ProgressCallback = (progress: number) => void;
type CikoID = string | number | symbol;
type CikoTaskList = Array<CikoTask>;
interface CikoTask {
  [index: string]: any;
  type: Taskkind;
}

interface CikoTaskRunConfig {
  id?: CikoID;
  async?: boolean;
}

interface CikoForks {
  [index: CikoID]: CikoTaskList;
}

enum Taskkind {
  delay,
  event,
  to,
  fork,
}

class Ciko {
  constructor(id?: CikoID) {
    this._befId = id || Symbol();
    this._forks = {};
    this._forks[this._befId] = [];
  }
  private _forks: CikoForks;
  private _befId: CikoID;

  private createTask(target: CikoID, task: CikoTask): void {
    const id = this._befId;
    this._befId = target;
    if (!this._forks[id]) this._forks[id] = [];
    this._forks[id].push(task);
  }

  // 延迟执行下一步
  public delay(time?: number, progress?: ProgressCallback): Ciko {
    this.createTask(this._befId, {
      type: Taskkind.delay,
    });
    return this;
  }

  // 事件

  public on(event: string, callback: () => void): Ciko;
  public on(event: (context: Ciko) => void): Ciko;
  public on(
    event: string | ((context: Ciko) => void),
    callback?: () => void
  ): Ciko {
    this.createTask(this._befId, {
      type: Taskkind.event,
    });
    return this;
  }

  public run(cikoIds?: (CikoID | CikoTaskRunConfig)[]): void {
    console.log(cikoIds);
  }

  // 前往分支
  public to(id: CikoID, event?: (context: Ciko) => boolean): Ciko {
    this.createTask(this._befId, {
      type: Taskkind.to,
    });
    if (event) {
      if (event(this)) {
        // 跳转
      }
    } else {
      // 跳转
    }
    return this;
  }

  // 定义分支
  public fork(id: CikoID): Ciko {
    this.createTask(id, {
      type: Taskkind.fork,
    });
    return this;
  }
}

export default Ciko;
