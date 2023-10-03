export function useLoginUser() {
    const email = ref('');
    const password = ref('');

    const { login } = useStrapiAuth();
    const router = useRouter();
}