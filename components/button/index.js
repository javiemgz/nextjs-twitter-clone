import { colors } from "../../styles/theme";

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button{
            display: flex;
            align-items: center;
            background: ${colors.secondary};
            color: ${colors.primary};
            font-size: 16px;
            border-radius:25px;
            border 0;
            font-weight: 800;
            padding: 8px 24px;
            transition: opacity .2s ease-in;
          }

          button > :global(svg){
            margin-right: 8px;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  )
}