import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const { title, slug, thumbnail } = blog.fields;

  return (
    <Link href={"/blogs/" + slug}>
      <a className="group">
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image
              src={"https:" + thumbnail.fields.file.url}
              alt="thumb"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      </a>
    </Link>
  );
};

export default BlogCard;
