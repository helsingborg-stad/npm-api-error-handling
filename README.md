# Helsingborg Stad Http Error Codes

This package is made by hehelps you throwing correct Http Error Codes.

## **Getting Started**

Before installing the actual package you need to setup a connection to [helsingborg city's github package registry](https://github.com/orgs/helsingborg-stad/packages).

To do this you need to create a `.npmrc` file in your project root and copy paste the following lines.

```
@helsingborg-stad:registry=https://npm.pkg.github.com/
```

### **Installation**
```
npm install @helsingborg-stad/npm-api-error-handling 
```

### **Usage**
```js
const httpErrors = require('@helsingborg-stad/npm-api-error-handling')

const HelloHttpsErrorCodes = () => {
    try {
        // Throw the error based on a status code.
        httpErrors.throwError(404)
    } catch (e) {
        // Do something with the error
        console.log(e);
    }
}
```
*This example will throw an 404 Error (ResourceNotFoundError).*

&nbsp;

```js
const httpErrors = require('@helsingborg-stad/npm-api-error-handling')

const HelloHttpsErrorCodes = () => {
    try {
        // Throw the error based on a status code.
        httpErrors.throwError(404, 'This is a custom error message')
    } catch (e) {
        // Do something with the error
        console.log(e);
    }
}
```
*This example will throw an 404 Error (ResourceNotFoundError) with a custom error message.*

&nbsp;

```js
const httpErrors = require('@helsingborg-stad/npm-api-error-handling')

const HelloHttpsErrorCodes = () => {
    try {
        // Throw the error based on a status code.
        httpErrors.ResourceNotFoundError()
    } catch (e) {
        // Do something with the error
        console.log(e);
    }
}
```

*This example will throw an 404 Error directly from the `ResourceNotFoundError` constructor.*

&nbsp;

## Supported Error Codes
| Error Name                    | Constructor                   | Code      | RFC Section                                                           |
|----------------------------   |------------------------------ |---------- |---------------------------------------------------------------------- |
| Bad Request Error             | `BadRequestError`             | 400       | [rfc7231-6.5.1](https://tools.ietf.org/html/rfc7231#section-6.5.1)    |
| Unauthorized Error            | `UnauthorizedError`           | 401       | [rfc7235-3.1](https://tools.ietf.org/html/rfc7235#section-3.1)        |
| Resource Not Found Error      | `ResourceNotFoundError`       | 404       | [rfc7231-6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4)    |
| Request Timeout Error         | `RequestTimeoutError`         | 408       | [rfc7231-6.5.7](https://tools.ietf.org/html/rfc7231#section-6.5.7)    |
| Unprocessable Entity Error    | `UnprocessableEntityError`    | 422       | [rfc4918-11.2](https://tools.ietf.org/html/rfc4918#section-11.2)      |
| Internal Server Error         | `InternalServerError`         | 500       | [rfc7231-6.6.1](https://tools.ietf.org/html/rfc7231#section-6.6.1)    |
| Bad Gateway Error             | `BadGatewayError`             | 522       | [rfc7231-6.6.3](https://tools.ietf.org/html/rfc7231#section-6.6.3)    |

## Built With

* [Node](https://nodejs.org/en/)

## Authors

* **Teddy Andersson** - *Initial work* - [TeddyAndersson](https://github.com/teddyandersson)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

