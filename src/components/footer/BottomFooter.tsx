import { developer } from "../../utils";

const BottomFooter = () => {
  return (
    <div className="bottom-footer d-flex justify-content-center">
      <small className="my-3">
        © Copyright RoyGlobally Solutions {new Date().getFullYear()}. All Right
        Reserved. Designed and Developed by{" "}
        <strong>
          <a href={developer}>FRED</a>
        </strong>
      </small>
      <StyleSheet />
    </div>
  );
};

export default BottomFooter;

const StyleSheet = () => {
  return (
    <style>
      {`
            .bottom-footer {
                border-top: 1px solid var(--color-gray-01);
            }

            .bottom-footer small {
                text-align: center;
                color: var(--color-gray-02);
            }

            .bottom-footer a {
                color: inherit;
            }
        `}
    </style>
  );
};
