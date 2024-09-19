An example of dependency injection on-request with NestJS.

## Running locally

### Install

```bash
pnpm install
```

### Run the Server

```bash
pnpm start
```

### Send Requests

```bash
curl 'localhost:3000/resize?fileName=myfile&size=30'
curl 'localhost:3000/resize?isLocal=true&fileName=myfile&size=30'
```
