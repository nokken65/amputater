type WorkerRequestParams = {
  route: string;
  method: string;
  body?: unknown;
  headers?: HeadersInit;
};

export const workerRequest = async <R>({
  route,
  method,
  body,
  headers,
}: WorkerRequestParams): Promise<{ data: R | null; error: Error | null }> => {
  try {
    const res = await fetch(`https://ampr.unknown65182.workers.dev/${route}`, {
      method,
      body: JSON.stringify(body),
      headers,
    });

    const data = await res.json();

    return data;
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
