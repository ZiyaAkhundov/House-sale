interface ContainerProps {
  children: React.ReactNode,
  className?: string
};

const Container: React.FC<ContainerProps> = ({ children,className }) => {
  return ( 
    <div
        className={`
          max-w-[2520px]
          mx-auto
          xl:pl-20
          xl:pr-5 
          md:px-10
          sm:px-2
          px-8
          ${className}
        `}
      >
        {children}
      </div>
   );
}
 
export default Container;