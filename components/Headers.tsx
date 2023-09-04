import { signIn, useSession, signOut } from "next-auth/react";
import styles from "@/styles/Home.module.css";

const Button = () => {
  return (
    <>
      <li className={styles.li}>Home</li>
    </>
  );
};

export default function Headers() {
  const { data, status } = useSession();

  return (
    <>
      <header>
        <nav>
          <ul className={styles.ul}>
            <Button />
            <li className={styles.li}>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>status: {status}</li>
            <li>{data?.user?.name}</li>
            {data?.user ? (
              <button type="button" onClick={() => signOut()}>
                Google Logout
              </button>
            ) : (
              <button type="button" onClick={() => signIn()}>
                Google Login
              </button>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
