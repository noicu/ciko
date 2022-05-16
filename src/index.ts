type ProgressCallback = (progress: number) => void;

class Ciko {
  delay(time?: number, progress?: ProgressCallback):Ciko {
    return this;
  }

  on(event?: Function) {
    return this;
  }

  loop(count?: number) {
    return this;
  }

  run() {
    return this;
  }
}

function ciko(): Ciko {
  return new Ciko();
}

export default ciko;
