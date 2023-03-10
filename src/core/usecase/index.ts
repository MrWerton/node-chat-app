export interface UseCase<T, P>{
    call(params: P): Promise<T>
}