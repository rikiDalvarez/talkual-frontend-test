export default () => {
    const email = ref('');
    const password = ref('');

    const loginUser = async () => {
        const { login } = useStrapiAuth();
        const router = useRouter();

        try {
            await login({ identifier: email.value, password: password.value });
            await router.push('/orders')
        } catch (e) {
            console.error(e)
        }
    }
    return {
        email,
        password,
        loginUser
    }
}