import { Link as ReactLink, LinkProps } from "react-router-dom";

const Link = (props: LinkProps) => (
  <ReactLink
    {...props}
    css={theme => ({
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      fontSize: "1.5rem",
      borderColor: theme.colors.text,
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: 10,
      padding: "0.5rem 2rem",
      textAlign: "center",
      width: "100%",
      "&:hover": {
        transition: "0.3s",
        borderColor: "yellow",
        color: "yellow",
      },
    })}
  />
);

const HomePage = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      <Link to={"/password-generator"}>PASSWORD GENERATOR</Link>
      <Link to={"/star-rating"}>STARS RATING GENERATOR</Link>
    </div>
  );
};
export default HomePage;
