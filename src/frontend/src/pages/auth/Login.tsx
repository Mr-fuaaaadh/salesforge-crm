import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginForm = z.infer<typeof loginSchema>;

const socialButtons = [
  {
    id: "google",
    label: "Google",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  {
    id: "microsoft",
    label: "Microsoft",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="11" height="11" x="1" y="1" fill="#f25022" />
        <rect width="11" height="11" x="13" y="1" fill="#7fba00" />
        <rect width="11" height="11" x="1" y="13" fill="#00a4ef" />
        <rect width="11" height="11" x="13" y="13" fill="#ffb900" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="#0077B5"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "alex@salesforge.io", rememberMe: false },
  });

  const onSubmit = async (_data: LoginForm) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    navigate({ to: "/dashboard" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-5"
    >
      <motion.div variants={itemVariants}>
        <h2 className="font-display font-bold text-2xl text-foreground">
          Welcome back
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Sign in to your SalesForge account
        </p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <motion.div variants={itemVariants} className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-medium">
            Email address
          </Label>
          <div className="relative">
            <Mail
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              id="email"
              type="email"
              placeholder="alex@company.com"
              {...register("email")}
              className={`pl-9 h-10 transition-smooth ${errors.email ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
              data-ocid="login.email.input"
            />
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-[11px] text-destructive"
                data-ocid="login.email.field_error"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-xs font-medium">
              Password
            </Label>
            <Link
              to="/auth/forgot-password"
              className="text-xs text-primary hover:underline"
              data-ocid="login.forgot_password.link"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password")}
              className={`pl-9 pr-10 h-10 transition-smooth ${errors.password ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
              data-ocid="login.password.input"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
          <AnimatePresence>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-[11px] text-destructive"
                data-ocid="login.password.field_error"
              >
                {errors.password.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <Checkbox
            id="rememberMe"
            {...register("rememberMe")}
            data-ocid="login.remember_me.checkbox"
          />
          <Label
            htmlFor="rememberMe"
            className="text-xs text-muted-foreground cursor-pointer"
          >
            Remember me for 30 days
          </Label>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            className="w-full h-10 font-medium relative overflow-hidden"
            disabled={isLoading}
            data-ocid="login.submit_button"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                  data-ocid="login.loading_state"
                >
                  <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </motion.span>
              ) : (
                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Sign In
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </form>

      <motion.div variants={itemVariants} className="relative">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-[11px] text-muted-foreground whitespace-nowrap">
          or continue with
        </span>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2">
        {socialButtons.map((btn) => (
          <Button
            key={btn.id}
            variant="outline"
            className="h-10 text-xs font-medium gap-2 transition-smooth hover:shadow-subtle"
            data-ocid={`login.${btn.id}.button`}
          >
            {btn.icon}
            <span className="hidden sm:inline">{btn.label}</span>
          </Button>
        ))}
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-muted-foreground"
      >
        Don't have an account?{" "}
        <Link
          to="/auth/signup"
          className="text-primary font-medium hover:underline"
          data-ocid="login.signup.link"
        >
          Create account
        </Link>
      </motion.p>
    </motion.div>
  );
}

export default LoginPage;
