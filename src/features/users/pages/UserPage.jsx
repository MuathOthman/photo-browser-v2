import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useUserAlbums } from '../hooks/useUserAlbums';
import AlbumGrid from '../../albums/components/AlbumGrid';
import NotFoundPage from '../../../pages/NotFoundPage';
import { initials } from '../../../utils/text';

const UserPage = () => {
    const { id } = useParams();

    const { data: user, error } = useUser(id);
    const { data: albums } = useUserAlbums(id);

    if (error?.status === 404) return <NotFoundPage />;
    if (error) return <p className="p-8">Couldn't load this user.</p>;
    if (!user) return <p className="p-8">Loading…</p>;

    return (
        <div className="px-4 md:px-8 pt-12 md:pt-16">
            <header className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="grid size-24 md:size-32 shrink-0 place-items-center rounded-full bg-accent text-3xl md:text-5xl font-bold text-white">
                    {initials(user.name)}
                </div>

                <div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{user.name}</h1>
                    <p className="mt-2 text-neutral-500">
                        @{user.username} · {user.address.city}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <a
                            href={`mailto:${user.email}`}
                            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
                        >
                            {user.email}
                        </a>
                        <span className="rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-semibold">
                            {user.company.name}
                        </span>
                    </div>
                </div>
            </header>

            <section className="mt-10 border-t border-neutral-200 dark:border-neutral-800 pt-6">
                <h2 className="mb-4 font-semibold">
                    Albums{albums && ` · ${albums.length}`}
                </h2>
                {albums ? (
                    <AlbumGrid albums={albums} ownerName={() => user.name} />
                ) : (
                    <p>Loading albums…</p>
                )}
            </section>
        </div>
    );
};

export default UserPage;