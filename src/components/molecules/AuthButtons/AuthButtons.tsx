import styles from "./AuthButtons.module.scss";
import Button from "@/components/atoms/Button/Button";

export default function AuthButtons() {
  return (
    <div className={styles.buttons}>
      <Button onClick={() => alert("Login clicked")} variant="secondary">
        Login
      </Button>
      <Button onClick={() => alert("Register clicked")} variant="primary">
        Register
      </Button>
    </div>
  );
}
