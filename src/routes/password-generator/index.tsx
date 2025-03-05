import { useTranslation } from "react-i18next";
import usePasswordGenerator from "@hooks/usePasswordGenerator.ts";
import Button from "@components/common/Button";
import PasswordOptions from "@components/passwordGenerator/PasswordOptions";
import PasswordOutput from "@components/passwordGenerator/PasswordOutput";
import { formStyle } from "./index.css.ts";

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
