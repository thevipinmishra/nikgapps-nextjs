import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";
import { List, ListItem } from "../components/List";
import Box from "../components/Box";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Code from "../components/Code";
import Layout from "../components/layout";

const Faqs = () => {
  return (
    <Box>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I buy you a cup of coffee?</AccordionTrigger>
          <AccordionContent>
            <Box>Sure! :)</Box>
            <Box>
              Just find the Donate button on the top right corner of the page!
            </Box>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            What is the difference between OpenGapps and NikGapps?
          </AccordionTrigger>
          <AccordionContent>
            <Typography>
              Nikgapps got these extra features over OpenGapps
            </Typography>
            <List css={{ marginBlock: "1.5rem" }}>
              <ListItem>It supports Split Apks!</ListItem>
              <ListItem>
                It's packages are created from the apks present in my personal
                device.
              </ListItem>
              <ListItem>
                It offers separate addon.d scripts for each package that it
                comes with. Easy to control which package you want to
                backup/restore after dirty flash!
              </ListItem>
              <ListItem>
                It follows a different partition mounting mechanism.
              </ListItem>
              <ListItem>
                It has it's own set of definition of packages defined keeping
                users feedback in mind.
              </ListItem>
              <ListItem>
                It has it's own implementation of install configuration (defined
                in NikGapps.config and debloater.config).
              </ListItem>
              <ListItem>
                It allows you to choose which partition you want to install the
                gapps in (/system or /product)
              </ListItem>
              <ListItem>
                It offers gms optimization saving your battery so you don't have
                to worry about google services draining your battery while you
                are sleeping.
              </ListItem>
              <ListItem>
                It comes with several addon packages for those who only require
                specific addon and not the whole gapps package.
              </ListItem>
            </List>
            <Typography css={{ marginBlockStart: 12 }}>
              You can checkout the more features, here
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How to uninstall NikGapps completely?
          </AccordionTrigger>
          <AccordionContent>
            You will find the detailed instructions on the NikGapps Uninstall
            Feature page.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            What are the guidelines for dirty flash?
          </AccordionTrigger>
          <AccordionContent>
            <List>
              <ListItem>
                Follow the Note: section of the changelog to find the
                recommendations on clean/dirty flash
              </ListItem>
              <ListItem>
                If you don't see any instructions on Note: section, follow below
                guidelines
              </ListItem>
              <ListItem>
                Dirty flashing gapps aren't really necessary! If your current
                setup is in working state, you have no reason to dirty flash.
                The apps will automatically update from Playstore.
              </ListItem>
              <ListItem>
                You can choose to flash a newer update when you are clean
                flashing your Rom
              </ListItem>
              <ListItem>
                If you are facing some issues with your current setup and you
                find a fix to the issue in the changelog of the gapps update,
                clean flash! This ensures that any residue factor is not
                impacting the actual fix
              </ListItem>
              <ListItem>
                If you can risk your system get into unstable state (with the
                flexibility of clean flashing at will) then dirty flash!
              </ListItem>
            </List>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            How to clean flash NikGapps update without losing data?
          </AccordionTrigger>
          <AccordionContent>
            <List>
              <ListItem>Uninstall Playstore updates of Google Apps</ListItem>
              <ListItem>
                Go to /system/addon.d folder and delete all the scripts that
                starts with "51-"
              </ListItem>
              <ListItem>Dirty flash Rom</ListItem>
              <ListItem>Flash newer version of NikGapps</ListItem>
            </List>
            <Typography css={{ marginBlockStart: 12 }}>
              This doesn't allow you to dirty flash GBoard/Google Clock app, for
              that you need to wipe /data and then flash gapps
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What are the 'Canary' Builds?</AccordionTrigger>
          <AccordionContent>
            <Typography>
              As with other kind of software releases, basically canary is
              technically a test, alpha, beta, whatever you call it. Has some
              improvements with quick fixes for previous issues. Main releases
              are more stable though it would be releases at a later date than
              canary. If you want to have a more stable update go for release,
              if you want bleeding edge, bugs be damned, go canary
            </Typography>

            <Button
              css={{ marginBlockStart: ".75rem" }}
              onClick={() => alert("clicked")}
            >
              Download Here
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            What is NikGapps.config and how to use it?
          </AccordionTrigger>
          <AccordionContent>
            <Typography>
              NikGapps.config is a configuration file which allows you to
              configure your installation the way you like. You can skip any
              Package that you don't want to be part of your installation. More
              on that here
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>How to use debloater.config?</AccordionTrigger>
          <AccordionContent>
            <Typography>
              Debloater config is a configuration that allows you to remove
              files/folders from system. You can place a file named
              debloater.config in /sdcard/NikGapps folder and add the folder
              name/file path that you want to remove and flash latest version of
              Debloater Zip.
            </Typography>

            <Typography css={{ fontWeight: 600, marginBlock: 12 }}>
              How to use debloater.config?
            </Typography>
            <List>
              <ListItem>
                Find the package name of the apk (MixPlorer is easy to use)
              </ListItem>
              <ListItem>
                Find the install location of the app (run 'pm path packagename'
                in terminal app)
              </ListItem>
              <ListItem>
                Note the Folder name (usually found in app or priv-app folder
                inside /system or /system/product folder)
              </ListItem>
              <ListItem>
                Open debloater.config and enter the Folder name (it is case
                sensitive)
              </ListItem>
              <ListItem>Flash the Debloater Zip.</ListItem>
              <ListItem>
                Watch below video to see how to use debloater.config
              </ListItem>
              <ListItem>
                Debloater also deletes specific path that is entered in
                debloater.config.
              </ListItem>
              <ListItem>
                If you want to delete /system/etc/hosts, you can enter
                /system/etc/hosts in debloater.config
              </ListItem>
              <ListItem>
                The debloater will debloat everything that is entered in
                debloater.config
              </ListItem>
            </List>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>Where is Aroma NikGapps?</AccordionTrigger>
          <AccordionContent>
            <Typography>
              This is discontinued since newer twrp doesn't work with aroma and
              eventually it will be deprecated
            </Typography>
            <Typography css={{ marginBlockStart: 12 }}>
              More details here
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger>Facing issues with SetupWizard?</AccordionTrigger>
          <AccordionContent>
            <List>
              <ListItem>Connect to any wifi</ListItem>
              <ListItem>
                Go to wifi settings and change the wifi type to unmetered
              </ListItem>
              <ListItem>Complete the setup</ListItem>
            </List>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-11">
          <AccordionTrigger>
            What to do if my contacts are not syncing?
          </AccordionTrigger>
          <AccordionContent>
            <Typography css={{ fontWeight: 600, marginBlockEnd: 12 }}>
              Here's How You Can Fix It
            </Typography>

            <List>
              <ListItem>Open Settings app</ListItem>
              <ListItem>Click on Apps & Notification</ListItem>
              <ListItem>
                Check all permissions for GooglePlayServices, whether allowed or
                not. If all permission denied, Allow them
              </ListItem>
              <ListItem>
                On upper right corner there is a three dot menu. Click on Show
                system app
              </ListItem>{" "}
              <ListItem>Search for Google Contacts Sync app</ListItem>{" "}
              <ListItem>
                Check whether Contacts permission is allowed or not for that
                app. If disabled, please allow Contacts permission so that it
                can Sync Google Contacts
              </ListItem>
            </List>
            <Typography css={{ marginBlockStart: 12, fontWeight: 600 }}>
              A restart maybe required
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-12">
          <AccordionTrigger>Google Backup Waiting for backup?</AccordionTrigger>
          <AccordionContent>
            <Typography>
              Connect your computer with your device and execute the following
              command from adb
            </Typography>

            <Box css={{ marginBlock: 12 }}>
              <Code>adb shell </Code>
              <Code>bmgr run</Code>
              <Code>bmgr backupnow --all</Code>
            </Box>

            <Typography>
              if it's shows Transport error, do bmgr backupnow appdata and
              repeat the previous command once more
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-13">
          <AccordionTrigger>How to report an issue?</AccordionTrigger>
          <AccordionContent>
            <Typography>
              If something is wrong with installation, addon.d, debloater, pull
              the installation logs and share it with us
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-14">
          <AccordionTrigger>
            Can I flash NikGapps on top of other gapps such as OpenGapps?
          </AccordionTrigger>
          <AccordionContent>
            <Typography>No, please clean flash</Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-15">
          <AccordionTrigger>
            Can I flash addons on top of Roms with existing gapps or other
            gapps?
          </AccordionTrigger>
          <AccordionContent>
            <Typography>
              Yes, now you can flash NikGapps addons independent of NikGapps.
              However, the recommendation is to flash on top of NikGapps to
              avoid any conflicts.
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-16">
          <AccordionTrigger>Where's my cat?</AccordionTrigger>
          <AccordionContent>
            <Typography>
              Sitting somewhere in the corner and rooting her device? ;)
            </Typography>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

Faqs.getLayout = (page) => {
  return (
    <Layout
      withContent={{
        title: "Faqs",
      }}
    >
      {page}
    </Layout>
  );
};

export default Faqs;
