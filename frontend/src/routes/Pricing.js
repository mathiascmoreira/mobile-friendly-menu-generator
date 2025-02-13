import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="primary.white"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to={`/`} color="inherit">
        QRMenu
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "1 user",
      "3 Menu Templates",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "contained",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "100 Menu Templates",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "Unlimited Menu Templates",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
];

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us"],
  },
  {
    title: "Features",
    description: ["QR Codes!", "Future Projects", "Developer stuff"],
  },
  {
    title: "Resources",
    description: ["Documentation", "Demo", "Support"],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <Container
        sx={{ bgcolor: "primary.grey", width: "auto", height: "auto" }}
      >
        <Typography bgcolor="primary.grey">
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          ></AppBar>
          {/* Hero unit */}
          <Container
            disableGutters
            maxWidth="sm"
            component="main"
            sx={{ pt: 8, pb: 6 }}
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary.white"
              fontWeight={"bold"}
              gutterBottom
            >
              Pricing
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="primary.white"
              component="p"
            >
              Purchase the right restaurant builder plan for you!
            </Typography>
          </Container>
          {/* End hero unit */}
          <Container maxWidth="md" component="main">
            <Grid
              container
              spacing={5}
              alignItems="flex-end"
              color="primary.white"
            >
              {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === "Enterprise" ? 12 : 6}
                  md={4}
                >
                  <Card variant="outlined">
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center" }}
                      action={tier.title === "Pro" ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: "center",
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                      >
                        <Typography
                          component="h2"
                          variant="h3"
                          color="text.secondary"
                        >
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /mo
                        </Typography>
                      </Box>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant=""
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant}>
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* Footer */}
          <Container
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              mt: 8,
              py: [3, 6],
            }}
          >
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="primary.white" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          variant="subtitle1"
                          color="text.secondary"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Container>
          {/* End footer */}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
