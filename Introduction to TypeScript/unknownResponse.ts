type Response = {
    code: number;
    text: string;
    value?: unknown;
};

function getResponseValue(response: Response): string {
    if (typeof response.value === 'string') {
        return response.value;
    }
    return '-';
}

// Examples:
console.log(getResponseValue({ code: 200, text: "OK", value: "Hello" }));
console.log(getResponseValue({ code: 404, text: "Not found" }));
console.log(getResponseValue({ code: 500, text: "Error", value: 123 }));