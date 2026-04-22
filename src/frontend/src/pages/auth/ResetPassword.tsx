import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const resetSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9!@#$%^&*]/, "Must contain a number or symbol"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetForm = z.infer<typeof resetSchema>;

function getPasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;
  if (score <= 1) return { score: 1, label: "Weak", color: "bg-destructive" };
  if (score === 2) return { score: 2, label: "Fair", color: "bg-warning" };
  if (score === 3) return { score: 3, label: "Good", color: "bg-chart-1" };
  return { score: 4, label: "Strong", color: "bg-chart-2" };
}

const passwordRules = [
  { test: (p: string) => p.length >= 8, label: "At least 8 characters" },
  { test: (p: string) => /[A-Z]/.test(p), label: "One uppercase letter" },
  {
    test: (p: string) => /[0-9!@#$%^&*]/.test(p),
    label: "One number or symbol",
  },
];

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetForm>({ resolver: zodResolver(resetSchema) });

  const passwordValue = watch("password") ?? "";
  const strength = getPasswordStrength(passwordValue);

  const onSubmit = async (_data: ResetForm) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => navigate({ to: "/auth/login" }), 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="space-y-6 text-center"
          data-ocid="reset.success_state"
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-chart-1/10 border border-chart-1/20 flex items-center justify-center">
              <ShieldCheck size={32} className="text-chart-1" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display font-bold text-2xl text-foreground">
              Password reset!
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Your password has been updated. Redirecting you to sign in...
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 2.2, ease: "linear" }}
            className="h-1 bg-chart-1 rounded-full"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/auth/login"
              className="text-sm text-primary hover:underline font-medium"
              data-ocid="reset.goto_login.link"
            >
              Go to sign in now
            </Link>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          <motion.div variants={itemVariants}>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <KeyRound size={22} className="text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl text-foreground">
              Set new password
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Create a strong password for your account.
            </p>
          </motion.div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <motion.div variants={itemVariants} className="space-y-1.5">
              <Label className="text-xs font-medium">New Password</Label>
              <div className="relative">
                <Lock
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min 8 characters"
                  {...register("password")}
                  className={`pl-8 pr-10 h-10 transition-smooth ${errors.password ? "border-destructive" : ""}`}
                  data-ocid="reset.password.input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
              </div>
              <AnimatePresence>
                {passwordValue.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1.5"
                  >
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((bar) => (
                        <motion.div
                          key={bar}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${strength.score >= bar ? strength.color : "bg-muted"}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: bar * 0.05 }}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      Strength:{" "}
                      <span
                        className={`font-medium ${strength.score <= 1 ? "text-destructive" : strength.score === 2 ? "text-warning" : "text-chart-1"}`}
                      >
                        {strength.label}
                      </span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[11px] text-destructive"
                    data-ocid="reset.password.field_error"
                  >
                    {errors.password.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              {passwordRules.map((rule) => {
                const met = rule.test(passwordValue);
                return (
                  <motion.div
                    key={rule.label}
                    className="flex items-center gap-2"
                    animate={{ opacity: passwordValue ? 1 : 0.5 }}
                  >
                    <CheckCircle2
                      size={12}
                      className={`transition-colors duration-200 ${met && passwordValue ? "text-chart-1" : "text-muted-foreground/40"}`}
                    />
                    <span
                      className={`text-[11px] transition-colors duration-200 ${met && passwordValue ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {rule.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1.5">
              <Label className="text-xs font-medium">Confirm Password</Label>
              <div className="relative">
                <Lock
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Repeat password"
                  {...register("confirmPassword")}
                  className={`pl-8 pr-10 h-10 transition-smooth ${errors.confirmPassword ? "border-destructive" : ""}`}
                  data-ocid="reset.confirm_password.input"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
              </div>
              <AnimatePresence>
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[11px] text-destructive"
                    data-ocid="reset.confirm_password.field_error"
                  >
                    {errors.confirmPassword.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full h-10 font-medium"
                disabled={isLoading}
                data-ocid="reset.submit_button"
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                      data-ocid="reset.loading_state"
                    >
                      <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Resetting...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Reset Password
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResetPasswordPage;
