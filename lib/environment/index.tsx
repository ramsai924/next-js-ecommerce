class ApiServiceMethods {
    private request = async (URL: string, options: RequestInit) => {
        try {
            const response = await fetch(URL, options);
            return response.json();
        } catch (err: any) {
            throw err;
        }
    }

    GET = async (URL: string, token: string, headers?: any, options?: any) => {
         return this.request(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                ...headers
            },
            ...options
        });
    }

    POST = (URL: string, body: any, token: string, headers?: any, options?: any) => {
    
        return this.request(URL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Authorization': `Bearer ${token}`,
                ...headers
            },
            ...options
        });
    }

    PATCH = (URL: string, body: any, token: string, headers?: any, options?: any) => {
        return this.request(URL, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Authorization': `Bearer ${token}`,
                ...headers
            },
            ...options
        });
    }

    DELETE = (URL: string, token: string, headers?: any, options?: any) => {
        return this.request(URL, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                ...headers
            },
            ...options
        });
    }
}

export default ApiServiceMethods
