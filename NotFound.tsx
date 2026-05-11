import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const isLoggedIn = !isLoading && user !== null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl font-heading font-bold text-foreground">
          Oops, we can't locate this stateroom.
        </h1>
        <p className="mb-8 text-base sm:text-lg text-muted-foreground">
          The page you're looking for doesn't exist or may have set sail. Let's get you back on course.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {isLoggedIn ? (
            <>
              <Button asChild size="lg">
                <Link to="/dashboard">Back to Dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ship-library">Browse Ship Library</Link>
              </Button>
            </>
          ) : (
            <Button asChild size="lg">
              <Link to="/ship-library">Browse Ship Library</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
