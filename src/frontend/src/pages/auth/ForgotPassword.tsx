import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const forgotSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotForm = z.infer<typeof forgotSchema>;

function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentEmail, setSentEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotForm>({ resolver: zodResolver(forgotSchema) });

  const onSubmit = async (data: ForgotForm) => {
    setIsLoading(true);
    setSentEmail(data.email);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    setIsSuccess(true);
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
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="space-y-6 text-center"
          data-ocid="forgot.success_state"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-chart-1/10 border border-chart-1/20 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-chart-1" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display font-bold text-2xl text-foreground">
              Check your email
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              We've sent a password reset link to{" "}
              <span className="font-medium text-foreground">{sentEmail}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl bg-muted/50 border border-border/50 p-4 text-left"
          >
            <p className="text-xs text-muted-foreground leading-relaxed">
              Didn't receive the email? Check your spam folder, or{" "}
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="text-primary hover:underline font-medium"
                data-ocid="forgot.resend.button"
              >
                try a different email address
              </button>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/auth/login"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="forgot.back_to_login.link"
            >
              <ArrowLeft size={14} />
              Back to sign in
            </Link>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <Mail size={22} className="text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl text-foreground">
              Reset password
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Enter your email and we'll send you a reset link.
            </p>
          </motion.div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
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
                  data-ocid="forgot.email.input"
                />
              </div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[11px] text-destructive"
                    data-ocid="forgot.email.field_error"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full h-10 font-medium"
                disabled={isLoading}
                data-ocid="forgot.submit_button"
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                      data-ocid="forgot.loading_state"
                    >
                      <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending link...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Reset Link
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </form>

          <motion.div variants={itemVariants}>
            <Link
              to="/auth/login"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors justify-center"
              data-ocid="forgot.back_to_login.link"
            >
              <ArrowLeft size={14} />
              Back to sign in
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ForgotPasswordPage;
