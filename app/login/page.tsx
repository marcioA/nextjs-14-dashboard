import LoginForm from '@/app/ui/login-form';
import styles from '@/app/ui/login.module.css';

export default function LoginPage() {
    return (
        <main className={styles.container}>
            <div className={styles['form-group']}>
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}