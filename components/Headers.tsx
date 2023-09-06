import { signIn, useSession, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";

type ButtonProps = {
  name: string;
};

export const Button = ({ name }: ButtonProps) => {
  return (
    <>
      <li className={styles.li}>{name}</li>
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
            <Button name="Home" />
            <Button name="About" />
            <Button name="Blog" />
            <Button name="Contact" />
            <Button name="Contact" />
            <Button name={`status: ${status}`} />
            <Button name={data?.user?.name} />
            {data?.user ? (
              <button type="button" onClick={() => signOut()}>
                Logout
              </button>
            ) : (
              <button type="button" onClick={() => signIn()}>
                Login
              </button>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
