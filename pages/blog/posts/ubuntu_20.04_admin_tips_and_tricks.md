# Ubuntu Desktop 20.04
Setup, tips and tricks

# Build

## Get Screen Resolution, Set Screen Resolution
	xrandr -q
	xrandr -s 1440x900

## Setup SSH Access
·       https://www.youtube.com/watch?v=hQWRp-FdTpc
·       https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04
·       https://www.tutorialspoint.com/gerrit/gerrit_add_your_ssh_key.htm
·       https://www.linuxbabe.com/linux-server/setup-passwordless-ssh-login
·       https://rderik.com/blog/understanding-ssh-keys-and-using-keychain-to-manage-passphrase-on-macos/#use-keychain-to-store-passphrases

**Summary**: create a local SSH key on your Development Computer, then copy that to the Remote Server ~/.shh/

### # Create Client SSH key
	ssh-keygen
	ssh-add ~/.ssh/<private_key_name>
or
**## follow derik**

	~/.ssh/config

If you want to use the same identity file and configuration for any domain use a * wildcard

	Host *
	 AddKeysToAgent yes
	 UseKeychain yes

if you used a custom name for your identity file, use that name here
	
	IdentityFile ~/.ssh/id_rsa

If you want to have a different identity file for each project you can specify it by domain or IP

	Host server.test
	 AddKeysToAgent yes
	 UseKeychain yes
	 IdentityFile ~/.ssh/id_rderik_server_test
	Host 10.0.0.1
	 AddKeysToAgent yes
	 UseKeychain yes
	 IdentityFile ~/.ssh/id_rderik_server2_test

Copy Local Ssh key to clipboard**

	pbcopy < ~/.ssh/id_rsa.pub

#### Remote Server

	ssh username@remote_host
	sudo nano /etc/ssh/sshd_config
    	PasswordAuthentication no
		ChallengeResponseAuthentication no
	#mkdir -p ~/.ssh
	sudo nano ~/.ssh/authorized_keys
   		<paste>
	sudo systemctl restart ssh

## Install APT Proxy Server
https://www.tecmint.com/apt-cache-server-in-ubuntu/
https://askubuntu.com/questions/342179/how-to-solve-extra-junk-at-end-of-file-when-using-apt

sudo apt install apt-cacher
sudo ufw allow from any to any port 3142 proto tcp
sudo nano /etc/apt-cacher/apt-cacher.conf

        allowed_hosts = *

sudo systemctl enable --now apt-cacher

sudo nano /etc/apt/apt.conf.d/30proxy

        Acquire::http { Proxy "http://192.168.1.115:3142"; };

Proxy server is now listening on. port 3142 to confirm

	ssl -tl | grep 3142

## configure apt proxy Client
http://[[user][:pass]@]host[:port]/
https://installati.one/ubuntu/20.04/auto-apt-proxy/

## Update and upgrade APT
	sudo apt update
	sudo apt upgrade

skip if you want fine control over updates.
	
	sudo apt upgrade -y

## Set TimeZone
	sudo apt-get install ntp
	sudo nano /etc/ntp.conf
        server au.pool.ntp.org
        server pool.ntp.org
	sudo timedatectl set-timezone 'Australia/Sydney'
	sudo dpkg-reconfigure --frontend noninteractive tzdata

## Operating System Shutdown Restart
	#restart
	shutdown -r now

### Power-off
	shutdown -P now


# Create New Admin USer, give root and add SSH key

	adduser <name>
	show groups
	id <name>
	
give sudo privilage
	
	usermod -aG sudo <name>
	show groups
	id <name>

## add ssh key for new user
	cd /home/<name>
	mkdir .ssh
	cd .ssh
	touch authorized_keys
	ls

**get public key for user from user client**
	
	sudo nano ~/.ssh/authorized_keys
	[paste, save and exit]

## Setup GitHub SSH Key to download to server

**# on the Server**

sudo chown -R <name>:<name> /home/<name>

ssh-key -t rsa

ls .ssh

#get key

cat .ssh/<key_name>

# activate ssh agent and add key

eval `ssh-agent -s`

ssh-add /home/<name>/.ssh/<key_name>

**#login to github**

[add new ssh key]

# INSTALL PYTHON

python3 -–version

sudo apt-get pip3 install -y

  

# Install GIT

$ git init

## Install Gerrit

·       https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-22-04

·       https://gerrit-review.googlesource.com/Documentation/linux-quickstart.html

·       https://gerrit-releases.storage.googleapis.com/index.html

sudo apt update

sudo apt upgrade

**# Install Java**

sudo apt install -y default-jdk

**#Install and Initialize Gerrit**

wget https://gerrit-releases.storage.googleapis.com/gerrit-3.6.1.war

export GERRIT_SITE=~/testsite1

sudo java -jar gerrit*.war init --batch --dev -d $GERRIT_SITE

sudo java -jar gerrit*.war init --batch --dev -d $GERRIT_SITE

--dev