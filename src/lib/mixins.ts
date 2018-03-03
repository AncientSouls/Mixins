interface IInstance {
  [key: string]: any;
}

type TClass<T> = new (...args: any[]) => T;

export {
  TClass,
  IInstance,
};
