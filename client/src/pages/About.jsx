export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Movie Mania
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to Movie Mania, your go-to source for all things cinema! This blog is a passion project by a group of avid movie enthusiasts who want to share their love for films with the world.
            </p>

            <p>
            At Movie Mania, you'll find a variety of articles, reviews, and discussions about the latest movies, classic films, and everything in between. Whether you're a casual moviegoer or a hardcore cinephile, there's something for everyone here.
            </p>
            <p>
            Join our community of movie lovers by leaving comments, sharing your thoughts on our posts, and engaging with other readers. We believe that movies have the power to inspire, entertain, and provoke thought, and we're thrilled to have you along for the ride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}