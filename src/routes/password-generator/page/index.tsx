import { useTranslation } from "react-i18next";
import { formStyle } from "./index.css.ts";
import Button from "@components/Button";
import usePasswordGenerator from "../hooks/usePasswordGenerator.ts";
import PasswordOptions from "../components/PasswordOptions";
import PasswordOutput from "../components/PasswordOutput";

const PasswordGeneratorPage = () => {
  const { t } = useTranslation();
  const { password, generatePassword, passwordOptions, setPasswordOptions } = usePasswordGenerator();

  const _generatePassword = () => generatePassword(passwordOptions);

  return (
    <form className={formStyle} onSubmit={e => e.preventDefault()}>
      <PasswordOptions passwordOptions={passwordOptions} setPasswordOptions={setPasswordOptions} />
      <Button type="button" onClick={_generatePassword} size={"lg"}>
        {t("password-generator.button.generate")}
      </Button>
      <PasswordOutput password={password} />
    </form>
  );
};

export default PasswordGeneratorPage;
