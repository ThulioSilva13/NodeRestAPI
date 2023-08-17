class ResponseObj
{
    data: object | string;
    error: string | null;
    message: string | null;

    constructor(data: object | string, error: string | null, message: string | null)
    {
        this.data = data;
        this.error = error;
        this.message = message;
    }
}

export default ResponseObj;