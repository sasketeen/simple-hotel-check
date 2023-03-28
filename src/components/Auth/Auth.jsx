import "./Auth.css";
import Card from "@c/Card/Card.jsx";
import SignInForm from "@c/Forms/SignInForm/SignInForm";

export default function Auth({handleSignIn}) {
  return (
    <div className="auth-layout">
      <Card className="auth-card">
        <h1 className="auth-card__title">Simple Hotel Check</h1>
        <SignInForm handleSignIn={handleSignIn} />
      </Card>
    </div>
  );
}
