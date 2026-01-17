// resources/js/routes/verification/index.ts

// Definimos los objetos básicos para que Vite no se pierda
export const notice: any = (options?: any) => ({
    url: '/email/verify',
    method: 'get',
});
notice.url = () => '/email/verify';

export const verify: any = (args: any) => {
    const id = Array.isArray(args) ? args[0] : args.id;
    const hash = Array.isArray(args) ? args[1] : args.hash;
    return {
        url: `/email/verify/${id}/${hash}`,
        method: 'get',
    };
};
verify.url = (args: any) => {
    const id = Array.isArray(args) ? args[0] : args.id;
    const hash = Array.isArray(args) ? args[1] : args.hash;
    return `/email/verify/${id}/${hash}`;
};

export const send: any = () => ({
    url: '/email/verification-notification',
    method: 'post',
});
send.url = () => '/email/verification-notification';

const verification = {
    notice,
    verify,
    send,
};

export default verification;