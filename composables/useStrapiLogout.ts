export default () => {
    const { logout } = useStrapiAuth();
    const router = useRouter();
    return () => {
        try {
            logout();
            router.push('/')
        } catch (e) {
            console.error(e)
        }
    }
}