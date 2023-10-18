type AdviceProps = {
  image: string;
  title: string;
  paragraph: string;
};

export default function AdviceSection({
  image,
  title,
  paragraph,
}: AdviceProps) {
  return (
    <>
      <img src={image} />
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </>
  );
}
